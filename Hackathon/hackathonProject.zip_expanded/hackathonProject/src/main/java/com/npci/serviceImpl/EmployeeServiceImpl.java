package com.npci.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.npci.bean.Employee;

import com.npci.dao.EmployeeDAO;

import com.npci.exception.AuthenticationException;

import com.npci.service.EmployeeService;

import com.npci.util.LoginParams;



@Service

public class EmployeeServiceImpl implements EmployeeService{

	@Autowired

	private EmployeeDAO employeeDao;



	@Override

	public Employee login(LoginParams params) throws AuthenticationException {

		Employee e = employeeDao.login(params.getEmail());

		if (e != null) {

			if(e.getPassword().equals(params.getPassword())) {

			return e;
			}
		}

		throw new AuthenticationException("authentication error occured");
	}

}
