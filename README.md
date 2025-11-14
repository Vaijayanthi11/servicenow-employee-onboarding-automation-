# Employee Onboarding Automation – ServiceNow Project

## 📌 Overview
This project automates the employee onboarding process using ServiceNow. 
It demonstrates strong programming skills required for a Programmer Analyst role, including:
- Server-side JavaScript
- Script Includes
- Business Rules
- Client Scripts
- Task automation
- Data validation

## 🎯 Features
✔ Auto-create sys_user record  
✔ Validate input using client script  
✔ Auto-create IT task  
✔ Clean, reusable Script Include  
✔ Real-world business logic  

## 🏗 Architecture
1. HR submits “Employee Onboarding” catalog request  
2. Client Script validates form  
3. Business Rule triggers automation  
4. Script Include creates user record  
5. Tasks are created for IT  

## 📁 Project Structure
- **script_include/** → Contains `CreateUserAPI.js`
- **business_rule/** → Contains `onboarding_auto_process.js`
- **client_script/** → Form validation logic
- **catalog_item/** → XML export of catalog form  

## 💡 Interview Talking Points
- Why Script Includes are reusable  
- Difference between client-side and server-side scripts  
- GlideRecord insert/update logic  
- Real-world onboarding scenario  

## 🚀 How to Import into ServiceNow
1. Go to **System Update Sets → Retrieved Update Sets**  
2. Click **Import Update Set from XML**  
3. Select catalog_item XML file  
4. Commit update set  

## 🧪 How to Test
1. Open the Service Catalog  
2. Search “Employee Onboarding”  
3. Submit form  
4. Check:
   - sys_user table for new user  
   - sc_task table for IT task  


