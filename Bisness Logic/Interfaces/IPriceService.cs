using Domain.DTOs.PriceDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bisness_Logic.Interfaces
{
    public interface IPriceService
    {
        Task Create(CreatePriceDTO priceDTO);
    }
}
