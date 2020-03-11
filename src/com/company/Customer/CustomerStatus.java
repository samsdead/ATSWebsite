package com.company.Customer;

public class CustomerStatus {

    private boolean valuedCustomer;
    private String customerID;
    private double discountOwed;
    private String discountWithdrawal;
    private boolean nextOrderDiscounted;
    // declare DiscountPlan class

    // class body
    public CustomerStatus(){

    }

    // getter for CustomerID variable
    public String getCustomerID(){
        return customerID;
    }

    // setter for CustomerID variable
    public void setCustomerID(String newID){
        customerID = newID;
    }

    // getter for isValuedCustomer variable
    public boolean isValuedCustomer(){
        return valuedCustomer;
    }

    // setter for isValuedCustomer variable
    public void setValuedCustomer(boolean newValuedCustomer){
        valuedCustomer = newValuedCustomer;
    }

    // getter for discountOwed variable
    public double getDiscountOwed(){
        return discountOwed;
    }

    // setter for discountOwed variable
    public void setDiscountOwed (double newDiscountOwed){
        discountOwed = newDiscountOwed;
    }

    // getter for nextOrderDiscounted variable
    public boolean isNextOrderDiscounted (){
        return nextOrderDiscounted;
    }

    // setter for nextOrderDiscounted variable
    public void setNextOrderDiscounted (boolean newNextOrderDiscounted){
        nextOrderDiscounted = newNextOrderDiscounted;
    }

}
