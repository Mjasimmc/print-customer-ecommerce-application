'use client';

import React, { useState } from 'react';
import { Button } from '../../src/ui';
import { ProductCard } from '../../src/components/ProductCard/ProductCard';
import { MOCK_PRODUCTS } from '../../src/mock/products';
import { MOCK_CATEGORIES } from '../../src/mock/categories';
import styles from '../../src/pages/Search/SearchPage.module.scss';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expressOnly, setExpressOnly] = useState(false);
  const [minRating, setMinRating] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(500);
  const [sortBy, setSortBy] = useState<'recommended' | 'price-low' | 'rating'>('recommended');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const popularKeywords = ['Business Cards', 'Embroidered Hoodies', '3D Resin Prints', 'Outdoor Banners', 'Laser Engraving'];

  let filteredProducts = MOCK_PRODUCTS.filter((p) => {
    const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = !activeCategory || p.categoryId === activeCategory;
    const matchesExpress = !expressOnly || p.expressAvailable;
    const matchesRating = p.rating >= minRating;
    const matchesPrice = p.basePrice <= maxPrice;
    return matchesQuery && matchesCategory && matchesExpress && matchesRating && matchesPrice;
  });

  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.basePrice - b.basePrice);
  } else if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  const resetFilters = () => {
    setQuery('');
    setActiveCategory(null);
    setExpressOnly(false);
    setMinRating(0);
    setMaxPrice(500);
  };

  return (
    <div className={styles.container}>
      {/* Mobile-Only Hero Search Header */}
      <section className={styles.mobileHero}>
        <h1 className={styles.heroTitle}>Search Hyperlocal Services & Custom Products</h1>

        <div className={styles.searchBoxWrapper}>
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search 3D prints, apparel, signs, business cards..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query ? (
            <button onClick={() => setQuery('')}>
              ✕
            </button>
          ) : (
            <span>
              🎙️ Voice
            </span>
          )}
        </div>

        <div className={styles.quickTags}>
          <span className={styles.tagLabel}>Trending:</span>
          {popularKeywords.map((kw) => (
            <span key={kw} className={styles.tag} onClick={() => setQuery(kw)}>
              {kw}
            </span>
          ))}
        </div>
      </section>

      {/* Main Workspace: Left Sidebar + Right Workspace Panel on Desktop */}
      <div className={styles.workspaceLayout}>
        {/* Left Desktop Sidebar Filters */}
        <aside className={styles.desktopSidebar}>
          <div className={styles.sidebarHeader}>
            <span className={styles.sidebarHeading}>Filter Workspace</span>
            <button className={styles.resetLink} onClick={resetFilters}>Reset All</button>
          </div>

          {/* Search Query Input */}
          <div className={styles.sidebarSearchBox}>
            <span>🔍</span>
            <input
              type="text"
              placeholder="Search catalog or specs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button onClick={() => setQuery('')}>
                ✕
              </button>
            )}
          </div>

          {/* Express Toggle Switch */}
          <div
            className={`${styles.sidebarToggleCard} ${expressOnly ? styles.active : ''}`}
            onClick={() => setExpressOnly(!expressOnly)}
          >
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.875rem', color: 'var(--color-text-main)' }}>⚡ 2-Hour Express</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>Filter dispatch ready local studios</div>
            </div>
            <div className={`${styles.switchIndicator} ${expressOnly ? styles.on : ''}`} />
          </div>

          {/* Service Categories */}
          <div className={styles.sidebarSection}>
            <h4 className={styles.sidebarTitle}>Categories</h4>
            <div className={styles.categoryList}>
              <div
                className={`${styles.categoryRow} ${activeCategory === null ? styles.active : ''}`}
                onClick={() => setActiveCategory(null)}
              >
                <span>All Capabilities</span>
                <span className={styles.countBadge}>{MOCK_PRODUCTS.length}</span>
              </div>
              {MOCK_CATEGORIES.map((c) => {
                const count = MOCK_PRODUCTS.filter((p) => p.categoryId === c.id).length;
                return (
                  <div
                    key={c.id}
                    className={`${styles.categoryRow} ${activeCategory === c.id ? styles.active : ''}`}
                    onClick={() => setActiveCategory(activeCategory === c.id ? null : c.id)}
                  >
                    <span>{c.icon} {c.name}</span>
                    <span className={styles.countBadge}>{count}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Price Range Slider */}
          <div className={styles.sidebarSection}>
            <div className={styles.priceSliderHeader}>
              <h4 className={styles.sidebarTitle}>Max Starting Price</h4>
              <span className={styles.priceValueTag}>${maxPrice}</span>
            </div>
            <input
              type="range"
              min="10"
              max="500"
              step="10"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className={styles.rangeSliderInput}
            />
          </div>

          {/* Rating Filter */}
          <div className={styles.sidebarSection}>
            <h4 className={styles.sidebarTitle}>Minimum Rating</h4>
            <div className={styles.ratingChipsGrid}>
              {[0, 4.0, 4.5, 4.8].map((r) => (
                <button
                  key={r}
                  className={`${styles.ratingChip} ${minRating === r ? styles.active : ''}`}
                  onClick={() => setMinRating(r)}
                >
                  {r === 0 ? 'All' : `★${r}+`}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Right Main Catalog Content */}
        <main className={styles.mainContent}>
          {/* Mobile Filter Chips Bar */}
          <div className={styles.mobileControlsBar}>
            <div className={styles.filterChips}>
              <button
                className={`${styles.chip} ${activeCategory === null ? styles.active : ''}`}
                onClick={() => setActiveCategory(null)}
              >
                All Services
              </button>
              <button
                className={`${styles.chip} ${expressOnly ? styles.active : ''}`}
                onClick={() => setExpressOnly(!expressOnly)}
              >
                ⚡ 2-Hour Express
              </button>
              {MOCK_CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  className={`${styles.chip} ${activeCategory === c.id ? styles.active : ''}`}
                  onClick={() => setActiveCategory(activeCategory === c.id ? null : c.id)}
                >
                  {c.icon} {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Top Control Bar for Desktop / Summary Bar */}
          <div className={styles.workspaceTopBar}>
            <div>
              <h2 className={styles.catalogHeading}>Custom Manufacturing & Printing Catalog</h2>
              <span className={styles.resultsCount}>
                Showing <strong>{filteredProducts.length}</strong> verified local services
              </span>
            </div>

            <div className={styles.topBarActions}>
              {/* View Mode Switcher */}
              <div className={styles.viewSwitcher}>
                <button
                  className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.active : ''}`}
                  onClick={() => setViewMode('grid')}
                  title="Grid View"
                >
                  ▦ Grid
                </button>
                <button
                  className={`${styles.viewBtn} ${viewMode === 'list' ? styles.active : ''}`}
                  onClick={() => setViewMode('list')}
                  title="List View"
                >
                  ☰ List
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className={styles.sortWrapper}>
                <span className={styles.sortLabel}>Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className={styles.sortSelect}
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Catalog Grid / List View */}
          {filteredProducts.length > 0 ? (
            <div className={viewMode === 'grid' ? styles.resultsGrid : styles.resultsList}>
              {filteredProducts.map((p) => (
                <ProductCard key={p.id} product={p} layout={viewMode} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <div style={{ fontSize: '3.5rem' }}>🔍</div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-main)', fontWeight: 800 }}>No matching local services found</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', maxWidth: '440px' }}>
                We couldn't find any items matching your current search parameters. Try adjusting your category or clearing filters.
              </p>
              <Button variant="secondary" size="md" style={{ marginTop: '0.5rem' }} onClick={resetFilters}>
                Reset All Search Filters
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
