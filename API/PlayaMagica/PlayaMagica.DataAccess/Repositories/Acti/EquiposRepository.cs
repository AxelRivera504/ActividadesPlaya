using PlayaMagica.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PlayaMagica.DataAccess.Repositories.Acti
{
<<<<<<<< HEAD:API/PlayaMagica/PlayaMagica.DataAccess/Repositories/Acti/EquiposRepository.cs
    public class EquiposRepository : IRepository<tbEquipos>
    {
        public RequestStatus Delete(tbEquipos item)
========
    public class FacturaRepository : IRepository<tbFactura>
    {
        public RequestStatus Delete(tbFactura item)
>>>>>>>> Chris:API/PlayaMagica/PlayaMagica.DataAccess/Repositories/Acti/FacturaRepository.cs
        {
            throw new NotImplementedException();
        }

<<<<<<<< HEAD:API/PlayaMagica/PlayaMagica.DataAccess/Repositories/Acti/EquiposRepository.cs
        public tbEquipos Find(int? id)
========
        public tbFactura Find(int? id)
>>>>>>>> Chris:API/PlayaMagica/PlayaMagica.DataAccess/Repositories/Acti/FacturaRepository.cs
        {
            throw new NotImplementedException();
        }

<<<<<<<< HEAD:API/PlayaMagica/PlayaMagica.DataAccess/Repositories/Acti/EquiposRepository.cs
        public RequestStatus Insert(tbEquipos item)
========
        public RequestStatus Insert(tbFactura item)
>>>>>>>> Chris:API/PlayaMagica/PlayaMagica.DataAccess/Repositories/Acti/FacturaRepository.cs
        {
            throw new NotImplementedException();
        }

<<<<<<<< HEAD:API/PlayaMagica/PlayaMagica.DataAccess/Repositories/Acti/EquiposRepository.cs
        public IEnumerable<tbEquipos> List()
========
        public IEnumerable<tbFactura> List()
>>>>>>>> Chris:API/PlayaMagica/PlayaMagica.DataAccess/Repositories/Acti/FacturaRepository.cs
        {
            throw new NotImplementedException();
        }

<<<<<<<< HEAD:API/PlayaMagica/PlayaMagica.DataAccess/Repositories/Acti/EquiposRepository.cs
        public RequestStatus Update(tbEquipos item)
========
        public RequestStatus Update(tbFactura item)
>>>>>>>> Chris:API/PlayaMagica/PlayaMagica.DataAccess/Repositories/Acti/FacturaRepository.cs
        {
            throw new NotImplementedException();
        }
    }
}
