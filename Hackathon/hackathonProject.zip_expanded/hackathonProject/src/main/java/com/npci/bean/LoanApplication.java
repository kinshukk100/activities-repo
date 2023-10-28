package com.npci.bean;

import javax.persistence.*;

@Entity
@Table(name = "Loan_Application")
public class LoanApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "application_id")
    private int applicationId;

    @Column(name = "customer_id_ref")
    private int customerIdRef;

    @Column(name = "loan_id_ref")
    private int loanIdRef;

    @Column(name = "status")
    private String status;

	public int getApplicationId() {
		return applicationId;
	}

	public void setApplicationId(int applicationId) {
		this.applicationId = applicationId;
	}

	public int getCustomerIdRef() {
		return customerIdRef;
	}

	public void setCustomerIdRef(int customerIdRef) {
		this.customerIdRef = customerIdRef;
	}

	public int getLoanIdRef() {
		return loanIdRef;
	}

	public void setLoanIdRef(int loanIdRef) {
		this.loanIdRef = loanIdRef;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public LoanApplication(int applicationId, int customerIdRef, int loanIdRef, String status) {
		super();
		this.applicationId = applicationId;
		this.customerIdRef = customerIdRef;
		this.loanIdRef = loanIdRef;
		this.status = status;
	}

	public LoanApplication() {
		super();
	}

	@Override
	public String toString() {
		return "LoanApplication [applicationId=" + applicationId + ", customerIdRef=" + customerIdRef + ", loanIdRef="
				+ loanIdRef + ", status=" + status + "]";
	}

}

