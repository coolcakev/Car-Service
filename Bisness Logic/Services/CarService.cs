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
    public class CarService : ICarService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ICarRepository _carRepository;

        public CarService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _carRepository = unitOfWork.GetInstanse<ICarRepository>();
        }
    }
}
