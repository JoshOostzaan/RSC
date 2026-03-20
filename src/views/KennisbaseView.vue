<template>
  <div class="kennisbase-view">
    <header class="page-header">
      <h1>Kennisbase & Documentatie</h1>
      <p class="subtitle">Normbladen, testprocedures en relevante documenten</p>
    </header>

    <div class="search-bar">
      <input 
        v-model="searchQuery" 
        type="search" 
        placeholder="Zoek in documenten..."
        class="search-input"
      />
    </div>

    <div class="documents-grid">
      <div 
        v-for="document in filteredDocuments" 
        :key="document.id"
        class="document-card"
      >
        <div class="document-icon">
          <span v-if="document.type === 'pdf'">📄</span>
          <span v-else-if="document.type === 'video'">🎥</span>
          <span v-else>📋</span>
        </div>
        <div class="document-info">
          <h3>{{ document.title }}</h3>
          <p class="document-category">{{ document.category }}</p>
          <p class="document-date">Laatst bijgewerkt: {{ document.lastUpdated }}</p>
        </div>
        <button class="download-btn" @click="openDocument(document)">
          Openen
        </button>
      </div>
    </div>

    <div v-if="filteredDocuments.length === 0" class="no-results">
      <p>Geen documenten gevonden</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KennisbaseView',
  data() {
    return {
      searchQuery: '',
      documents: [
        {
          id: 1,
          title: 'Normblad Schade-inspectie',
          category: 'Normbladen',
          type: 'pdf',
          lastUpdated: '15-12-2024',
          url: '/docs/normblad-schade.pdf'
        },
        {
          id: 2,
          title: 'Testprocedure Elektrische Installaties',
          category: 'Testprocedures',
          type: 'pdf',
          lastUpdated: '10-01-2025',
          url: '/docs/test-elektra.pdf'
        },
        {
          id: 3,
          title: 'Handleiding Ventilatiesystemen',
          category: 'Technische Installaties',
          type: 'pdf',
          lastUpdated: '05-01-2025',
          url: '/docs/ventilatie.pdf'
        },
        {
          id: 4,
          title: 'Richtlijnen Houtrot Inspectie',
          category: 'Onderhoud',
          type: 'pdf',
          lastUpdated: '20-12-2024',
          url: '/docs/houtrot.pdf'
        },
        {
          id: 5,
          title: 'Video: Veilig werken op hoogte',
          category: 'Training',
          type: 'video',
          lastUpdated: '01-12-2024',
          url: '/videos/veiligheid.mp4'
        },
        {
          id: 6,
          title: 'Checklist Brandveiligheid',
          category: 'Veiligheid',
          type: 'pdf',
          lastUpdated: '18-12-2024',
          url: '/docs/brandveiligheid.pdf'
        }
      ]
    };
  },
  computed: {
    filteredDocuments() {
      if (!this.searchQuery) {
        return this.documents;
      }
      const query = this.searchQuery.toLowerCase();
      return this.documents.filter(doc => 
        doc.title.toLowerCase().includes(query) || 
        doc.category.toLowerCase().includes(query)
      );
    }
  },
  methods: {
    openDocument(document) {
      alert(`Opening: ${document.title}`);
    }
  }
};
</script>

<style scoped>
.kennisbase-view {
  padding: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 2rem;
}

.page-header h1 {
  color: #141b1f;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #475e6c;
  font-size: 0.95rem;
}

.search-bar {
  margin-bottom: 2rem;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

.search-input:focus {
  outline: none;
  border-color: #00aaa2;
}

.documents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.document-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-left: 5px solid #00aaa2;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: 0.2s;
}

.document-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.document-icon {
  font-size: 2.5rem;
}

.document-info h3 {
  color: #141b1f;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.document-category {
  color: #00aaa2;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.document-date {
  color: #475e6c;
  font-size: 0.85rem;
}

.download-btn {
  background: #00aaa2;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
}

.download-btn:hover {
  background: #008f88;
}

.no-results {
  text-align: center;
  padding: 3rem;
  color: #475e6c;
}
</style>