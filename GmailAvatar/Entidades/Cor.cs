using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GmailAvatar.Entidades
{
    public class Cor
    {
        public string Nome { set; get; }
        public string Claro { set; get; }
        public string Normal { set; get; }
        public string Escuro { set; get; }
        public string Complementar { set; get; }
        public string ComplEscuro { set; get; }

        public Cor(string nome, string clr, string nml, string esc, string compl, string complEsc)
        {
            Nome = nome;
            Claro = clr;
            Normal = nml;
            Escuro = esc;
            Complementar = compl;
            ComplEscuro = complEsc;
        }
    }
}
