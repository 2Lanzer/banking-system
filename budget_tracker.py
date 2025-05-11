from tkinter import *
from tkinter import ttk

root = Tk()
root.title("Budget Tracker")
root.geometry("400x400")

# declaring string variable
# for storing name and password
name_var = StringVar()
passw_var = StringVar()

 
# defining a function that will
# get the name and password and 
# print them on the screen
def submit():

    name=name_var.get()
    password=passw_var.get()
    
    print("The name is : " + name)
    print("The password is : " + password)
    
    name_var.set("")
    passw_var.set("")

# company name
company_lbl = Label(root, text="The LANDMARK", bg="lightblue", fg="darkblue", font=("Arial", 14, "bold"), relief="solid", borderwidth=2)
company_lbl.place(x=120, y=10)

payslip_lbl = Label(root, text="Payslip: ")
payslip_lbl.place(x=20, y=50)
payslip_entry = Entry(root,textvariable = name_var, font=('calibre',10,'normal'))
payslip_entry.place(x=90, y=50)

saving_lbl = Label(root, text="Saving: ")
saving_lbl.place(x=20, y=80)
saving_entry = Entry(root,textvariable = name_var, font=('calibre',10,'normal'))
saving_entry.place(x=90, y=80)

mp2_lbl = Label(root, text="MP2: ")
mp2_lbl.place(x=20, y=110)
mp2_entry = Entry(root,textvariable = name_var, font=('calibre',10,'normal'))
mp2_entry.place(x=90, y=110)

insurance_lbl = Label(root, text="Insurance: ")
insurance_lbl.place(x=20, y=140)
insurance_entry = Entry(root,textvariable = name_var, font=('calibre',10,'normal'))
insurance_entry.place(x=90, y=140)

dental_lbl = Label(root, text="Dental: ")
dental_lbl.place(x=20, y=170)
dental_entry = Entry(root,textvariable = name_var, font=('calibre',10,'normal'))
dental_entry.place(x=90, y=170)

rent_lbl = Label(root, text="Rent: ")
rent_lbl.place(x=20, y=200)
rent_entry = Entry(root,textvariable = name_var, font=('calibre',10,'normal'))
rent_entry.place(x=90, y=200)

food_lbl = Label(root, text="Food: ")
food_lbl.place(x=20, y=230)
food_entry = Entry(root,textvariable = name_var, font=('calibre',10,'normal'))
food_entry.place(x=90, y=230)

laundry_lbl = Label(root, text="Laundry: ")
laundry_lbl.place(x=20, y=260)
laundry_entry = Entry(root,textvariable = name_var, font=('calibre',10,'normal'))
laundry_entry.place(x=90, y=260)

grocery_lbl = Label(root, text="Groceries: ")
grocery_lbl.place(x=20, y=290)
grocery_entry = Entry(root,textvariable = name_var, font=('calibre',10,'normal'))
grocery_entry.place(x=90, y=290)

other_lbl = Label(root, text="Others: ")
other_lbl.place(x=20, y=320)
other_entry = Entry(root,textvariable = name_var, font=('calibre',10,'normal'))
other_entry.place(x=90, y=320)

# quit the program
quit_btn = ttk.Button(text="Quit", command=root.destroy)
quit_btn.place(x=290, y=360, width=100, height=30)
root.mainloop()