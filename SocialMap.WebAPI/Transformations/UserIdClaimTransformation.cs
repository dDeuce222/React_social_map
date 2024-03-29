﻿using Microsoft.AspNetCore.Authentication;
using Newtonsoft.Json.Linq;
using SocialMap.Infrastructure.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace SocialMap.WebAPI.Transformations
{
    public class UserIdClaimTransformation : IClaimsTransformation
    {
        private readonly IAppUserService _appUserService;

        public UserIdClaimTransformation(IAppUserService appUserService)
        {
            _appUserService = appUserService;
        }

        public async Task<ClaimsPrincipal> TransformAsync(ClaimsPrincipal principal)
        {
            int userIdValue;

            try
            {
                string uuid = principal.Claims.First(c => c.Type == "userUuid").Value;
                var user = await _appUserService.GetAsync(uuid: uuid);
                userIdValue = user.Id;
            }
            catch
            {
                throw new Exception("Can not get app user from UserId claim transform");
            }

            ClaimsIdentity claimsIdentity = new();
            var claimType = "id";
            if (!principal.HasClaim(claim => claim.Type == claimType))
            {
                claimsIdentity.AddClaim(new Claim(claimType, userIdValue.ToString()));
            }

            principal.AddIdentity(claimsIdentity);
            return await Task.FromResult(principal);
        }
    }
}
