import type { ConfigurationOptions } from '@c8y/devkit';
import { author, description, version, name, license } from './package.json';

export default {
  runTime: {
    author,
    description,
    version,
    name,
    dynamicOptionsUrl: true,
    isPackage: true,
    license,
    package: 'blueprint'
  },
  buildTime: {
    federation: [
      '@angular/animations',
      '@angular/cdk',
      '@angular/common',
      '@angular/compiler',
      '@angular/core',
      '@angular/forms',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router',
      '@angular/upgrade',
      '@c8y/client',
      '@c8y/ngx-components',
      'ngx-bootstrap',
      '@ngx-translate/core',
      '@ngx-formly/core'
    ]
  }
} as const satisfies ConfigurationOptions;
