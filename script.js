// ====================== SIGNUP ======================
if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", async function(e) {
        e.preventDefault();

        const student = {
            name: document.getElementById("name").value,
            regno: document.getElementById("regno").value,
            department: document.getElementById("department").value,
            semester: document.getElementById("semester").value,
            phone: document.getElementById("phone").value,
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        };

        await fetch("login.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        });

        alert("Signup Successful! Please login.");
        window.location.href = "login.html";
    });
}


// ====================== LOGIN ======================
if (document.getElementById("loginPageForm")) {
    document.getElementById("loginPageForm").addEventListener("submit", async function(e) {
        e.preventDefault();

        const data = {
            username: document.getElementById("loginUsername").value,
            password: document.getElementById("loginPassword").value
        };

        const res = await fetch("validate_login.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        if (result.status === "invalid") {
            alert("Invalid Username or Password");
        } else {
            localStorage.setItem("studentData", JSON.stringify(result));
            window.location.href = "dashboard.html";
        }
    });
}


// ====================== SHOW STUDENT INFO ======================
window.onload = function () {
    const student = JSON.parse(localStorage.getItem("studentData"));

    if (student && document.getElementById("studentInfo")) {
        document.getElementById("studentInfo").innerHTML = `
            <b>Name:</b> ${student.name} <br>
            <b>Reg No:</b> ${student.regno} <br>
            <b>Department:</b> ${student.department} <br>
            <b>Checks Done:</b> ${student.check_count}
        `;
    }
};


// ====================== VERIFY ELIGIBILITY ======================
function verifyEligibility() {

    let attendance = parseFloat(document.getElementById("attendance").value);
    let leaveType = document.getElementById("leaveType").value;

    let statusBox = document.getElementById("statusBox");
    let details = document.getElementById("details");

    statusBox.className = "";
    details.innerHTML = "";

    let status = "";

    if (attendance >= 75) {
        status = "APPROVED";
        statusBox.innerText = "Application Approved";
        statusBox.classList.add("approved");

        details.innerHTML = `
            <h3>Approach:</h3>
            Advisor -> HOD -. Principal
            <h3>Required Documents:</h3>
            Leave Form, ID Card Copy
        `;
    }
    else if (attendance >= 65) {
        status = "WARNING";
        statusBox.innerText = "Warning Attendance Low";
        statusBox.classList.add("warning");

        details.innerHTML = `
            <h3>Approach:</h3>
            Advisor & HOD
            <h3>Required Documents:</h3>
            Explanation Letter
        `;
    }
    else {
        status = "REJECTED";
        statusBox.innerText = "Application Rejected";
        statusBox.classList.add("rejected");

        details.innerHTML = `
            <h3>Reason:</h3>
            Attendance too low
        `;
    }

    saveApplication(status);
}


// ====================== SAVE APPLICATION ======================
async function saveApplication(status) {

    const student = JSON.parse(localStorage.getItem("studentData"));

    const data = {
        regno: student.regno,
        attendance: document.getElementById("attendance").value,
        leaveType: document.getElementById("leaveType").value,
        days: document.getElementById("days").value,
        fromDate: document.getElementById("fromDate").value,
        toDate: document.getElementById("toDate").value,
        status: status
    };

    await fetch("save_application.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    // Update check count locally
    student.check_count = (student.check_count || 0) + 1;
    localStorage.setItem("studentData", JSON.stringify(student));

    // Update UI instantly
    if (document.getElementById("studentInfo")) {
        document.getElementById("studentInfo").innerHTML = `
            <b>Name:</b> ${student.name} <br>
            <b>Reg No:</b> ${student.regno} <br>
            <b>Department:</b> ${student.department} <br>
            <b>Checks Done:</b> ${student.check_count}
        `;
    }
}


// ====================== GENERATE PDF ======================
async function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const student = JSON.parse(localStorage.getItem("studentData"));

    let attendance = document.getElementById("attendance").value;
    let leaveType = document.getElementById("leaveType").value;
    let days = document.getElementById("days").value;

    let today = new Date().toLocaleDateString();

    let status = "";

    if (attendance >= 75) {
        status = "APPROVED";
    } 
    else if (attendance >= 65) {
        status = "WARNING";
    } 
    else {
        status = "REJECTED";
    }

    let letter = `
Date: ${today}

From:
${student.name}
Roll No: ${student.regno}
Department of ${student.department}

To:
The Head of the Department
Department of ${student.department}

Through:
The Advisor
Department of ${student.department}

Subject: Request for Grant of Leave 

Respected Sir/Madam,

I respectfully submit that I am a student of the department ${student.department} , bearing roll number ${student.regno}. I request permission to avail ${leaveType} leave for a suration of  ${days} day(s). My current attendance percentage is ${attendance}% . Based on instituitional eligibility criteria my request status is ${status}.

I kindly request you to consider my application and grant approval for the above mentioned period. I assure you that I will complete all academic responsibilities upon my return.

Thanking you in anticipation.

Yours Faithfully,
${student.name}
${student.regno}
---------------------FOR OFFICIAL USE ONLY------------------------------------
Advisor Remarks:
Signature:             Date: 
HOD Remarks:
Signature:             Date:
`;

    doc.text(letter, 20, 20, { maxWidth: 170 });
    doc.save("Leave_Application.pdf");
}


// ====================== LOGOUT ======================
function clearAll() {
    localStorage.clear();
    window.location.href = "login.html";
}
window.onload = function() {
    const student = JSON.parse(localStorage.getItem("studentData"));

    document.getElementById("studentInfo").innerHTML = `
        <b>Name:</b> ${student.name} <br>
        <b>Reg No:</b> ${student.regno} <br>
        <b>Department:</b> ${student.department} <br>
        <b>Checks Done:</b> ${student.check_count}
    `;
};