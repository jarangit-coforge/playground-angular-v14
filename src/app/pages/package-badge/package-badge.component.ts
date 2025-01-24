import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Validators } from 'ngx-editor';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-package-badge',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,

  ],
  templateUrl: './package-badge.component.html',
  styleUrls: ['./package-badge.component.scss'],
})
export class PackageBadgeComponent implements OnInit {
  badgeForm: FormGroup;
  icons: string[] = ['⭐', '🔥', '🎉', '🛒', '💡']; // Icon options
  badgeTemplates = [
    {
      text: 'Sale 50%',
      icon: '⭐',
      color: 'bg-primary',
      position: ' top-0 end-0',
    },
  ];
  previewBadge = {
    text: 'Sale 50%',
    icon: '⭐',
    color: 'bg-primary',
    position: ' top-0 end-0',
  }; // Default preview
  colors = [
    {
      label: 'Black',
      value: 'bg-black',
    },
    {
      label: 'Primary',
      value: 'bg-primary',
    },
    {
      label: 'Danger',
      value: 'bg-danger',
    },
    {
      label: 'Success',
      value: 'bg-success',
    },
    {
      label: 'Warning',
      value: 'bg-warning',
    },
  ];
  positionOptions = [
    {
      label: 'Top Left',
      value: 'top-0 start-0',
    },
    {
      label: 'Top Right',
      value: 'top-0 end-0',
    },
    {
      label: 'Bottom Left',
      value: 'bottom-0 start-0',
    },
    {
      label: 'Bottom ',
      value: 'bottom-0 end-0',
    },
  ];
  constructor(private fb: FormBuilder) {
    this.badgeForm = this.fb.group({
      badgeText: ['Sale 50%', [Validators.required, Validators.maxLength(15)]],
      selectedIcon: ['⭐', Validators.required],
      selectedColor: ['bg-primary', Validators.required],
      selectedPosition: ['top-0 end-0', Validators.required],
    });
  }

  ngOnInit(): void {
    this.badgeForm.valueChanges.subscribe((value) => {
      this.updatePreview();
    });
  }

  // Method to update Preview
  updatePreview() {
    const { badgeText, selectedIcon, selectedColor, selectedPosition } =
      this.badgeForm.value;
    this.previewBadge = {
      text: badgeText,
      icon: selectedIcon,
      color: selectedColor,
      position: selectedPosition,
    };
  }

  // Handle Form Submission
  onSubmit() {
    if (this.badgeForm.valid) {
      console.log('Form Submitted:', this.badgeForm.value);
    } else {
      console.log('Form is invalid!');
    }
  }
}
