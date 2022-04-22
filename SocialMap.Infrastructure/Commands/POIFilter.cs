﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SocialMap.Infrastructure.Commands
{
    public class POIFilter
    {
        public string Name { get; set; }
        bool? IsGlobal { get; set; }
        bool? IsAccepted { get; set; }
        bool OnlyMine { get; set; } = false;
    }
}
