package com.npci.service;

import com.npci.bean.Customer;
import com.npci.exception.AuthenticationException;
import com.npci.util.LoginParams;

public interface CustomerService {

public Customer save(Customer cust);
public Customer login(LoginParams params) throws AuthenticationException;

}