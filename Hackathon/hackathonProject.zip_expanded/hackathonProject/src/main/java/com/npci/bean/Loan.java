package com.npci.bean;

import javax.persistence.*;

@Entity
@Table(name = "Loan")
public class Loan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "loan_id")
    private int loanId;

    @Column(name = "loan_type")
    private String loanType;

	public int getLoanId() {
		return loanId;
	}

	public void setLoanId(int loanId) {
		this.loanId = loanId;
	}

	public String getLoanType() {
		return loanType;
	}

	public void setLoanType(String loanType) {
		this.loanType = loanType;
	}

	public Loan() {
		super();
	}

	public Loan(int loanId, String loanType) {
		super();
		this.loanId = loanId;
		this.loanType = loanType;
	}

	@Override
	public String toString() {
		return "Loan [loanId=" + loanId + ", loanType=" + loanType + "]";
	}
	
    
}

