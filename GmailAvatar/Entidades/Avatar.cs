using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GmailAvatar.Entidades
{
    public class Avatar
    {
        public Guid Id { get; set; }
        public string Nome { get; set; }
        public string SobreNome { get; set; }
        public Forma[] Cabeca { get; set; }
        public Forma[] Corpo { get; set; }
    }
}
