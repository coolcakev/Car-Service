using Bisness_Logic.Interfaces;
using Data_Access;
using Data_Access.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bisness_Logic.Services
{
    public class PriceService : IPriceService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IPriceRepository _priceRepository;

        public PriceService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _priceRepository = unitOfWork.GetInstanse<IPriceRepository>();
        }
    }
}
