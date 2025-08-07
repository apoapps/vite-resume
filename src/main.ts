import './style.css'
import { resumeData } from './data/resume'
import { ThemeManager } from './utils/theme'
import { PDFExporter } from './utils/pdf-export'

class ResumeApp {
  private currentLang: 'en' | 'es' = 'en'
  private isExporting: boolean = false
  private themeManager: ThemeManager
  private pdfExporter: PDFExporter

  private readonly LETTER_WIDTH = 816
  private readonly LETTER_HEIGHT = 1056

  constructor() {
    this.themeManager = new ThemeManager()
    this.pdfExporter = new PDFExporter()
    this.init()
  }

  init() {
    this.render()
    this.attachEventListeners()
    this.updateScale()
    window.addEventListener('resize', () => this.updateScale())
  }

  render() {
    const data = resumeData[this.currentLang]
    
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
      <div class="min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
        <!-- Sticky Navbar -->
        <nav class="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3 print:hidden">
          <div class="max-w-6xl mx-auto flex justify-between items-center">
            <h1 class="text-lg font-bold text-gray-900 dark:text-white">Resume Preview</h1>
            <div class="flex items-center gap-3">
              <button id="lang-toggle" class="btn btn-outline btn-sm w-20">
                ${this.currentLang === 'en' ? 'English' : 'Español'}
              </button>
              <button id="theme-toggle" class="btn btn-outline btn-sm">
                <span class="text-black dark:text-white">${this.themeManager.isDark() ? '☀' : '🌙'}</span>
              </button>
              <button id="export-pdf" class="btn btn-primary btn-sm" ${this.isExporting ? 'disabled' : ''}>
                ${this.isExporting ? (this.currentLang === 'en' ? 'Generating...' : 'Generando...') : (this.currentLang === 'en' ? 'Download' : 'Descargar')}
              </button>
            </div>
          </div>
        </nav>

        <!-- Resume Container -->
        <div id="resume-container" class="flex justify-center py-5 px-5 print:py-0 print:px-0">
          <div id="resume-page" class="resume-page bg-white dark:bg-gray-900 shadow-lg print:shadow-none overflow-hidden">
            ${this.renderResumeContent(data)}
          </div>
        </div>
      </div>
    `
  }

  renderResumeContent(data: any) {
    return `
      <!-- Main Content Container -->
      <div class="flex flex-col h-full p-2 gap-2">
        <!-- Header Section -->
        <div class="flex justify-center">
          <div class="card px-6 py-4" style="width: 480px">
            <h1 class="text-black dark:text-white text-[32px] font-bold text-center leading-tight">
              ${data.name}
            </h1>
          </div>
        </div>

        <!-- Summary Section -->
        <div class="card p-4 flex-shrink-0">
          <h2 class="text-black dark:text-white text-base font-bold mb-3">
            ${data.summary.title}
          </h2>
          <p class="text-black dark:text-gray-300 text-xs font-medium leading-relaxed">
            ${data.summary.content}
          </p>
        </div>

        <!-- Main Content - Two Columns -->
        <div class="flex gap-3 flex-1 min-h-0">
          <!-- Left Column -->
          <div class="card p-2 w-[240px] flex-shrink-0">
            <div class="flex flex-col gap-2 h-full">
              ${this.renderLeftColumn(data)}
            </div>
          </div>

          <!-- Right Column -->
          <div class="flex flex-col gap-2 flex-1 min-h-0">
            ${this.renderRightColumn(data)}
          </div>
        </div>
      </div>
    `
  }

  renderLeftColumn(data: any) {
    return `
      <!-- Contact Section -->
      <div class="flex-shrink-0">
        <h3 class="text-black dark:text-white text-[14px] font-bold mb-2">
          ${data.contact.title}
        </h3>
        <div class="text-black dark:text-gray-300 text-[9px] leading-relaxed space-y-0.5">
          <div>${data.contact.phone}</div>
          <div class="underline">${data.contact.email}</div>
          <div>${data.contact.location}</div>
          <div class="underline">${data.contact.portfolio.text}</div>
          <div class="underline">${data.contact.appStore.text}</div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="flex-shrink-0">
        <h3 class="text-black dark:text-white text-[14px] font-bold mb-2">
          ${data.skills.title}
        </h3>
        <div class="text-black dark:text-gray-300 text-[9px] leading-relaxed">
          ${data.skills.list.map((skill: string) => `<div>${skill}</div>`).join('')}
        </div>
      </div>

      <!-- Languages Section -->
      <div class="flex-shrink-0">
        <h3 class="text-black dark:text-white text-[14px] font-bold mb-2">
          ${data.languages.title}
        </h3>
        <div class="text-black dark:text-gray-300 text-[9px] font-bold leading-relaxed">
          ${data.languages.list.map((lang: any) => `
            <div>
              <span class="font-bold">${lang.lang}</span> - ${lang.level}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- References Section -->
      <div class="flex-1 min-h-0 overflow-hidden">
        <h3 class="text-black dark:text-white text-[14px] font-bold mb-2">
          ${data.references.title}
        </h3>
        <div class="text-black dark:text-gray-300 text-[8px] leading-tight space-y-1">
          ${data.references.list.map((ref: any) => `
            <div>
              <span class="font-bold">${ref.name}</span> ${ref.title} ${ref.company} ${ref.email} ${ref.phone}
            </div>
          `).join('')}
        </div>
      </div>
    `
  }

  renderRightColumn(data: any) {
    return `
      <!-- Education Section -->
      <div class="card p-3 flex-shrink-0">
        <h3 class="text-black dark:text-white text-base font-bold mb-2">
          ${data.education.title}
        </h3>
        <div class="text-black dark:text-gray-300 text-[9px] leading-tight space-y-1">
          ${data.education.list.map((edu: any) => `
            <div>
              <span class="font-bold">- ${edu.year} - ${edu.degree}:</span> ${edu.description}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Projects & Activities Section -->
      <div class="card p-3 flex-1 min-h-0 overflow-hidden">
        <h3 class="text-black dark:text-white text-base font-bold mb-2">
          ${data.projects.title}
        </h3>
        
        <div class="flex flex-col gap-3 h-full overflow-hidden">
          <!-- Work Experience -->
          <div class="flex-shrink-0">
            <h4 class="text-black dark:text-white text-[12px] font-bold mb-1">
              ${data.projects.experience.title}
            </h4>
            <div class="text-black dark:text-gray-300 text-[9px] leading-tight ml-1">
              ${data.projects.experience.list.map((exp: any) => `
                <div class="mb-2">
                  <div class="font-bold">${exp.year} - ${exp.role}</div>
                  <div class="font-medium">${exp.collaboration}</div>
                  <div class="mb-1">${exp.description}</div>
                  ${exp.details.map((detail: string) => `<div>${detail}</div>`).join('')}
                </div>
              `).join('')}
            </div>
          </div>

          <!-- App Development -->
          <div class="flex-1 min-h-0 overflow-hidden">
            <h4 class="text-black dark:text-white text-[12px] font-bold mb-1">
              ${data.projects.appDev.title}:
            </h4>
            <div class="text-black dark:text-gray-300 text-[9px] leading-tight ml-1 space-y-1">
              ${data.projects.appDev.list.map((app: any) => `
                <div>
                  ${app.year} - <span class="font-bold">${app.name}</span>: ${app.description} <span class="underline">(link)</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- Technical Skills Section -->
      <div class="card p-3 flex-shrink-0">
        <h3 class="text-black dark:text-white text-base font-bold mb-1">
          ${data.technicalSkills.title}
        </h3>
        <div class="text-black dark:text-gray-300 text-[7px] leading-tight space-y-0.5">
          ${data.technicalSkills.list.map((skill: any) => `
            <div>
              <span class="font-bold">${skill.area}</span> - ${skill.skills}
            </div>
          `).join('')}
        </div>
      </div>
    `
  }

  attachEventListeners() {
    document.getElementById('lang-toggle')?.addEventListener('click', () => {
      this.toggleLanguage()
    })

    document.getElementById('theme-toggle')?.addEventListener('click', () => {
      this.themeManager.toggle()
      this.render()
      this.attachEventListeners()
      this.updateScale()
    })

    document.getElementById('export-pdf')?.addEventListener('click', () => {
      this.exportToPDF()
    })
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'es' : 'en'
    this.render()
    this.attachEventListeners()
    this.updateScale()
  }

  async exportToPDF() {
    const resumeElement = document.getElementById('resume-page')
    if (!resumeElement || this.isExporting) return

    this.isExporting = true
    this.render()
    this.attachEventListeners()

    try {
      await this.pdfExporter.exportToPDF(
        resumeElement,
        `Alejandro_Apodaca_Resume_${this.currentLang.toUpperCase()}.pdf`
      )
    } catch (error) {
      alert(
        this.currentLang === 'en' 
          ? 'Could not generate PDF. See console for details.' 
          : 'No se pudo generar el PDF. Ver consola para detalles.'
      )
    } finally {
      this.isExporting = false
      this.render()
      this.attachEventListeners()
    }
  }

  updateScale() {
    const container = document.getElementById('resume-container')
    const resumePage = document.getElementById('resume-page')
    
    if (container && resumePage) {
      const containerWidth = container.clientWidth
      const availableWidth = containerWidth - 40 // 20px padding on each side
      const newScale = Math.min(1, availableWidth / this.LETTER_WIDTH)
      
      resumePage.style.transform = `scale(${newScale})`
      resumePage.style.transformOrigin = 'top center'
      resumePage.style.marginBottom = newScale < 1 ? `${(1 - newScale) * this.LETTER_HEIGHT * -0.5}px` : '0'
    }
  }
}

// Initialize the app
new ResumeApp()
