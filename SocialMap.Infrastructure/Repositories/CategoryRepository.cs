﻿using Microsoft.EntityFrameworkCore;
using SocialMap.Core.Domain;
using SocialMap.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SocialMap.Infrastructure.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private AppDbContext _appDbContext;

        public CategoryRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<Category> AddAsync(Category category)
        {
            try
            {
                _appDbContext.Category.Add(category);
                _appDbContext.SaveChanges();
                return await Task.FromResult(category);
            }
            catch (Exception)
            {
                return null;
            }
        }

        public async Task<Category> GetAsync(int id)
        {
            try
            {
                return await Task.FromResult(_appDbContext.Category.Include(c => c.POIs).FirstOrDefault(c => c.Id == id));
            }
            catch (Exception)
            {
                return null;
            }
        }

       

        public async Task<IEnumerable<Category>> BrowseAllAsync()
        {
            try
            {
                return await Task.FromResult(_appDbContext.Category.Include(c => c.POIs));
            }
            catch (Exception)
            {
                return null;
            }
        }

        public async Task<IEnumerable<Category>> GetByIdsAsync(List<int> ids)
        {
            if(ids != null)
            {
                var c = _appDbContext.Category.Where(c => ids.Any(id => id == c.Id));
                return await Task.FromResult(c);
            }
            else
            {
                return await Task.FromResult(new List<Category>());
            }
        }

        public async Task UpdateAsync(Category category)
        {
            try
            {
                var c = _appDbContext.Category.FirstOrDefault(x => x.Id == category.Id);

                c.Name = category.Name;

                _appDbContext.SaveChanges();
                await Task.CompletedTask;
            }
            catch (Exception ex)
            {
                await Task.FromException(ex);
            }
        }

        public async Task DelAsync(int id)
        {
            try
            {
                _appDbContext.Category.Remove(_appDbContext.Category.FirstOrDefault(c => c.Id == id));
                _appDbContext.SaveChanges();
                await Task.CompletedTask;
            }
            catch (Exception ex)
            {
                await Task.FromException(ex);
            }
        }
    }
}
