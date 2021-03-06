// -*- mode: js; indent-tabs-mode: nil; js-basic-offset: 4 -*-
//
// This file is part of ThingTalk
//
// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// Author: Giovanni Campagna <gcampagn@cs.stanford.edu>
"use strict";

const assert = require('assert');

const { clean } = require('../lib/utils');

function testClean() {
    assert.strictEqual(clean('argument'), 'argument');
    assert.strictEqual(clean('other_argument'), 'other argument');
    assert.strictEqual(clean('otherArgument'), 'other argument');
    assert.strictEqual(clean('WEIRDThing'), 'weirdthing');
    assert.strictEqual(clean('WEIRD_thing'), 'weird thing');
    assert.strictEqual(clean('otherWEIRD_Thing'), 'other weird thing');
    assert.strictEqual(clean('OtherArgument'), 'other argument');
}
module.exports = testClean;
if (!module.parent)
    testClean();
