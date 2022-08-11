using Data_Access.Interfaces;
using Domain.Entity;

namespace Data_Access.Repositories
{
    public class MarkRepository : GenericRepository<Mark>, IMarkRepository
    {
        public MarkRepository(ApplicationContext context) : base(context)
        {
        }
    }
}
