using System;

namespace Car_Service.Models.ErrorModels
{
    public class DeleteExeption:Exception
    {
        public DeleteExeption():base(){}
        public DeleteExeption(string mesage):base(mesage) {}
    }
}
