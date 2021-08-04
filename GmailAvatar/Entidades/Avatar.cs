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
        public string[] Cabeca { get; set; }
        public string[] Corpo { get; set; }

        public Avatar(string nome, string sobre, string[] cabeca, string[] corpo)
        {
            this.Nome = nome;
            this.SobreNome = sobre;
            this.Cabeca = cabeca;
            this.Corpo = corpo;
        }
    }
}
