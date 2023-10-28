// LoanService.js

const LoanService = {
    loans: [
      {
        type: 'Housing',
        status: 'Not Applied',
      },
      {
        type: 'Educational',
        status: 'Not Applied',
      },
      {
        type: 'Gold',
        status: 'Not Applied',
      },
      {
        type: 'Personal',
        status: 'Not Applied',
      },
      {
        type: 'Car',
        status: 'Not Applied',
      },
      {
        type: 'Business',
        status: 'Not Applied',
      }
    ],
  
    getLoans: () => {
      // Retrieve the list of loans
      return LoanService.loans;
    },
  
    // You can add more methods to update loan statuses as needed
  };
  
  export default LoanService;
  