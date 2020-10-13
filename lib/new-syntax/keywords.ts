// -*- mode: typescript; indent-tabs-mode: nil; js-basic-offset: 4 -*-
//
// This file is part of ThingTalk
//
// Copyright 2019-2020 The Board of Trustees of the Leland Stanford Junior University
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

export const KEYWORDS = new Set<string>([
    // keywords shared with JavaScript
    'class',
    'const',
    'extends',
    'if',
    'import',
    'in',
    'for',
    'let',
    'of',
    'switch',
    'with',
    'new',
    'null',
    'true',
    'false',
    'enum',

    // AlmondScript-specific keywords
    'abstract',
    'aggregate',
    'bookkeeping',
    'dataset',
    'mixin',
    'notify',
    'out',
    'opt',
    'req',
    'sort',
    'until',
    'when',

    // keywords and reserved words from JavaScript are reserved for future extensions
    'await',
    'break',
    'case',
    'catch',
    'continue',
    'debugger',
    'default',
    'delete',
    'do',
    'export',
    'finally',
    'function',
    'implements',
    'instanceof',
    'interface',
    'package',
    'private',
    'protected',
    'public',
    'return',
    'static',
    'super',
    'this',
    'throw',
    'try',
    'typeof',
    'var',
    'void',
    'while',
    'yield',

    // reserved words from ThingTalk
    'join',
    'edge',
    'now',
    'as',

    // all ThingTalk type names are keywords
    'Any',
    'ArgMap',
    'Array',
    'Boolean',
    'Compound',
    'Currency',
    'Date',
    'Entity',
    'Enum',
    'Location',
    'Measure',
    'Number',
    'Object',
    'RecurrentTimeSpecification',
    'Time',
    'String',

    // reserved as type names for future extensions
    'Integer',
    'Invalid',
    'Void',
]);

export const FORBIDDEN_KEYWORDS = new Set<string>([
    // dangerous JS identifiers are prohibited, and don't even hit the parser
    '__count__',
    '__defineGetter__',
    '__defineSetter__',
    '__lookupGetter__',
    '__lookupSetter__',
    '__noSuchMethod__',
    '__parent__',
    '__proto__',
    'constructor',
    'eval',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toSource',
    'toString',
    'valueOf',
    'unwatch',
    'watch',
]);
export const CONTEXTUAL_KEYWORDS = new Set<string>([
    // keywords inside class and dataset
    'action',
    'from',
    'list',
    'monitorable',
    'program',
    'query',
    'stream',

    // sort descriptors
    'asc',
    'desc',
]);

export const DOLLAR_KEYWORDS = new Set<string>([
    '$?',
    '$answer',
    '$choice',
    '$end_of',
    '$location',
    '$now',
    '$program_id',
    '$self',
    '$start_of',
    '$type',
    '$undefined'
]);
