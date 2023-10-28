package com.npci.bean;

import javax.persistence.*;

@Entity
@Table(name = "Credit_Score")
public class CreditScore {
    @Id
    @Column(name = "pan")
    private String pan;

    @Column(name = "score")
    private int score;

	public String getPan() {
		return pan;
	}

	public void setPan(String pan) {
		this.pan = pan;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

	public CreditScore(String pan, int score) {
		super();
		this.pan = pan;
		this.score = score;
	}

	public CreditScore() {
		super();
	}

	@Override
	public String toString() {
		return "CreditScore [pan=" + pan + ", score=" + score + "]";
	}

}

