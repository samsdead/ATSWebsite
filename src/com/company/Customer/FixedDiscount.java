package com.company.Customer;

public class FixedDiscount extends DiscountPlan {

    //this is found in discount plan class. need clarification.
    private double discountPercentage;

    public FixedDiscount(){}

    public double getDiscountPercentage(){return discountPercentage;}

    public void setDiscountPercentage(double newDiscountPercentage){discountPercentage = newDiscountPercentage;}

}
