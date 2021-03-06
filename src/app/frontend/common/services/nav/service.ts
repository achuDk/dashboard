// Copyright 2017 The Kubernetes Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { MatDrawer } from '@angular/material';

export class NavService {
  private nav_: MatDrawer;

  toggle(): void {
    this.nav_.toggle();
  }

  setVisibility(isVisible: boolean): void {
    this.nav_.toggle(isVisible);
  }

  setNav(nav: MatDrawer): void {
    this.nav_ = nav;
  }

  isVisible(): boolean {
    return this.nav_.opened;
  }
}
