/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import type { CoinbaseConfig } from '../core/coinbase.config.ts'
import { CoinbaseRequest } from './request.ts'

export abstract class CoinbaseResource {
  protected readonly request: CoinbaseRequest

  constructor(
    protected readonly config: CoinbaseConfig,
    protected readonly path: string,
    auth: boolean = false,
  ) {
    this.request = new CoinbaseRequest(this.config, this.path, auth)
  }
}
