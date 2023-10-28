package com.npci.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npci.bean.Customer;
import com.npci.dao.CustomerDAO;
import com.npci.exception.AuthenticationException;
import com.npci.service.CustomerService;
import com.npci.util.LoginParams;

@Service
public class CustomerServiceImpl implements CustomerService {
	@Autowired
	private CustomerDAO customerDao;

	@Override
	public Customer save(Customer cust) {

		return customerDao.save(cust);
	}

	@Override
	public Customer login(LoginParams params) throws AuthenticationException {
		Customer c = customerDao.login(params.getEmail());
		if (c != null) {
			if (c.getPassword().equals(params.getPassword())) {

				return c;
			}
		}

		throw new AuthenticationException("authentication error occured");
	}

}
