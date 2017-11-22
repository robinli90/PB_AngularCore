using System;
using FluentValidation.Attributes;
using PB_AngularCore.ViewModels.Validations;

namespace PB_AngularCore.ViewModels
{

    [Validator(typeof(CredentialsViewModelValidator))]
    public class CredentialsViewModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}