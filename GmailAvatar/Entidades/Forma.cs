using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GmailAvatar.Entidades
{
    public class Forma
    {
        public int Id { get; set; }
        public string Caminho { get; set; }

        Forma() { }

        public Forma(int id, string caminho)
        {
            this.Id = id;
            this.Caminho = caminho + ".svg";
        }

    }
}
