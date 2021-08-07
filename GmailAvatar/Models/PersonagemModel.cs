using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GmailAvatar.Models
{
    public class PersonagemModel
    {
        public string Nome { get; set; }
        public string Sobrenome { get; set; }

        public PersonagemModel(string nome, string sobrenome)
        {
            Nome = nome;
            Sobrenome = sobrenome;
        }
    }
}