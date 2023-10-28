

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.npci.bean.CreditScore;
import com.npci.dao.CreditScoreDAO;
import com.npci.service.CreditScoreService;

@Service
public class CreditScoreServiceImpl implements CreditScoreService {

    private final CreditScoreDAO creditScoreRepository;

    @Autowired
    public CreditScoreServiceImpl(CreditScoreDAO creditScoreRepository) {
        this.creditScoreRepository = creditScoreRepository;
    }

    @Override
    public CreditScore save(CreditScore creditScore) {
        return creditScoreRepository.save(creditScore);
    }

    @Override
    public CreditScore findByPan(String pan) {
        return creditScoreRepository.findById(pan).orElse(null);
    }

	@Override
	public CreditScoreService save(CreditScoreService creditScore) {
		return null;
	}
}

