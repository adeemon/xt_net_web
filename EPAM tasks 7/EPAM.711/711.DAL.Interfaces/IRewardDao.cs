﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _711.Entities;

namespace _711.DAL.Interfaces
{
    public interface IRewardDao
    {
        void Add(Reward reward);

        void DeleteByUser(User user);

        void DeleteByAward(User user, Award award, bool deleteForAll);

        IEnumerable<Reward> GetAll();
    }
}
