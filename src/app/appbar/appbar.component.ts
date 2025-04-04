import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
})
export class AppbarComponent {
  mobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  // Cerrar menú al hacer clic fuera de él
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.mobile-menu-button') && !target.closest('.nav-links-mobile')) {
      this.mobileMenuOpen = false;
    }
  }

  // Cerrar menú al cambiar el tamaño de la pantalla
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (window.innerWidth > 768) {
      this.mobileMenuOpen = false;
    }
  }
}
