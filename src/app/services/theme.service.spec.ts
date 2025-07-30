import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
    // Clear localStorage before each test
    localStorage.clear();
  });

  afterEach(() => {
    // Clean up DOM changes
    document.documentElement.removeAttribute('data-theme');
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with light theme by default', () => {
    const newService = TestBed.inject(ThemeService);
    expect(newService.getCurrentTheme()).toBeFalse();
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('should toggle theme from light to dark', () => {
    service.toggleTheme();
    expect(service.getCurrentTheme()).toBeTrue();
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('should toggle theme from dark to light', () => {
    service.toggleTheme(); // to dark
    service.toggleTheme(); // back to light
    expect(service.getCurrentTheme()).toBeFalse();
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('should remember theme preference from localStorage', () => {
    localStorage.setItem('theme', 'dark');
    const newService = TestBed.inject(ThemeService);
    expect(newService.getCurrentTheme()).toBeTrue();
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});