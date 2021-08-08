using GmailAvatar.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GmailAvatar.Controllers
{
    public class PersonagemController : Controller
    {
        static PersonagensModel personagens = new PersonagensModel(0);

        // GET: Personagem
        public ActionResult Index()
        {
            return View("Index", personagens);
        }

        public ActionResult HandleFormaClick(string pers)
        {
            int indice = Int32.Parse(pers);
            personagens.SetAtivo(indice);
            return View("Index", personagens);
        }

        public ActionResult HandleCorClick(string cor)
        {
            personagens.SetCor(cor);
            return View("Index", personagens);
        }
    }
}