using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GmailAvatar.Models
{
    public class PersonagensModel
    {
        public List<PersonagemModel> Personagens { get; set; }
        public PersonagemModel Ativo { get; set; }
        public int Tamanho { get; set; }

        public PersonagensModel(int indice)
        {
            Personagens= new List<PersonagemModel>() {
                new PersonagemModel("_Blank", ""),
                new PersonagemModel("Mario", "Mario"),
                new PersonagemModel("Pikachu", ""),
                new PersonagemModel("Mickey", "Mouse"),
                new PersonagemModel("Finn", "Mertens"),
                new PersonagemModel("Bart", "Simpson"),
                new PersonagemModel("Homer", "Simpson"),
                new PersonagemModel("Batman", ""),
                new PersonagemModel("Coringa", ""),
                new PersonagemModel("Heath", "Ledger"),
                new PersonagemModel("Clark", "Kent"),
                new PersonagemModel("Superman", ""),
                new PersonagemModel("Shikamaru", "Nara"),
                new PersonagemModel("Vlad", "Dracula"),
                new PersonagemModel("Ninja", ""),
                new PersonagemModel("Vito", "Corleone"),
                new PersonagemModel("John", "Rambo"),
                new PersonagemModel("Darth", "Vader"),
                new PersonagemModel("Chaves", ""),
                new PersonagemModel("Charlie", "Chaplin"),
                new PersonagemModel("Kim", "Jongun"),
                new PersonagemModel("Friedrich", "Nietzsche"),
                new PersonagemModel("Noam", "Chomsky"),
                new PersonagemModel("Virginia", "Woolf"),
                new PersonagemModel("Rene", "Magritte"),
                new PersonagemModel("Salvador", "Dali"),
                new PersonagemModel("Leandro", "Emicida"),
                new PersonagemModel("Freddie", "Mercury")
            };

            Ativo = Personagens[indice];
            Tamanho = Personagens.Count;
        }

        public void SetAtivo(int indice)
        {
            Ativo = Personagens[indice];
        }
    }
}