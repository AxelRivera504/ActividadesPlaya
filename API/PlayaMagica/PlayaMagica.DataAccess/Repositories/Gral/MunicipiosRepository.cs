using PlayaMagica.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PlayaMagica.DataAccess.Repositories.Gral
{
    public class MunicipiosRepository : IRepository<tbMunicipios,VW_tbMunicipios>
    {
        public RequestStatus Delete(tbMunicipios item)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Delete(int id)
        {
            throw new NotImplementedException();
        }

        public tbMunicipios Find(int? id)
        {
            throw new NotImplementedException();
        }

        public VW_tbMunicipios Find(int id)
        {
            throw new NotImplementedException();
        }

        public RequestStatus Insert(tbMunicipios item)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<tbMunicipios> List()
        {
            throw new NotImplementedException();
        }

        public RequestStatus Update(tbMunicipios item)
        {
            throw new NotImplementedException();
        }

        IEnumerable<VW_tbMunicipios> IRepository<tbMunicipios, VW_tbMunicipios>.List()
        {
            throw new NotImplementedException();
        }
    }
}
