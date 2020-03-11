package com.company.Customer;

public class DiscountReport {

    private String orderID;
    private String amountDiscounted;
    private String fullPrice;

    public DiscountReport(){}

    public void addToReport(String orderID, double amountDiscounted, double fullPrice){}

    public String getOrderID(){return orderID;}
    public void setOrderID(String newOrderID){orderID = newOrderID;}
    public String getAmountDiscounted(){return amountDiscounted;}
    public void setAmountdiscounted(String newAmountDiscounted){amountDiscounted = newAmountDiscounted;}
    public String getFullPrice(){return fullPrice;}
    public void setFullPrice(String newFullPrice){fullPrice = newFullPrice;}

}
