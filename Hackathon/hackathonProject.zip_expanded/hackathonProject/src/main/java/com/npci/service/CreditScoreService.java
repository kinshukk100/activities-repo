package com.npci.service;

import com.npci.bean.CreditScore;

public interface CreditScoreService {
    CreditScoreService save(CreditScoreService creditScore);
    CreditScoreService findByPan(String pan);
}
