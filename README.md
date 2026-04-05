# 📘 EDUPERMITPRO  
### College Permission & Leave Management System  

EDUPERMITPRO is a web-based application designed to simplify and automate the student leave request process in educational institutions. It replaces traditional manual methods with a digital system that improves efficiency, transparency, and record management.

---

## 🚀 Features  

- Student login system  
- Attendance-based eligibility verification  
- Automatic leave application PDF generation  
- Instant approval status (Approved / Warning / Rejected)  
- Local storage for quick data access  
- Simple and user-friendly interface  

---

## 🧠 How It Works  

1. Student enters personal and academic details on the login page  
2. Data is temporarily stored using browser localStorage for quick access  
3. User is redirected to the dashboard  
4. Student enters:  
   - Attendance percentage  
   - Leave type  
   - Number of days  
   - Dates  
5. System evaluates eligibility:  
   - ≥ 75% → Approved  
   - 65%–74% → Warning  
   - < 65% → Rejected  
6. A PDF leave application is generated with all details  
7. Application data is stored in the database for record management  

---

## ⚙️ Setup Instructions  

1. Install **XAMPP** (or any local server with PHP & MySQL)  
2. Place the project folder inside the `htdocs` directory  
3. Start **Apache** and **MySQL** from XAMPP Control Panel  
4. Open **phpMyAdmin**  
5. Create a new database (e.g., `edupermitpro`)  
6. Import the `database.sql` file  
7. Update database credentials in `connect.php` if needed  
8. Run the project in browser:

   ```
   http://localhost/EDUPERMITPRO/login.html
   ```
---
## 🛠️ Technologies Used  

- Frontend: HTML, CSS, JavaScript  
- Backend: PHP  
- Database: MySQL  
- PDF Generation: jsPDF  
- Storage: localStorage (for temporary client-side data) + MySQL (for persistent storage)  
- Environment: XAMPP  

---

## 📂 Project Structure  

EDUPERMITPRO/
│── connect.php  
│── dashboard.html  
│── database.sql  
│── get_student.php  
│── login.html  
│── login.php  
│── save_application.php  
│── script.js  
│── signup.html  
│── style.css  
│── validate_login.php  

---

## Advantages  

- Reduces paperwork  
- Saves time for students and faculty  
- Ensures consistent decision-making  
- Easy to use and accessible  

---

## Conclusion  

EDUPERMITPRO presents a practical approach to digitizing leave management systems in academic institutions. By combining client-side storage for responsiveness and database storage for persistence, it ensures both performance and reliability while improving administrative efficiency.
