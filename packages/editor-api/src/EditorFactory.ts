/*
 * Copyright 2020 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { LanguageData } from "@kogito-tooling/microeditor-envelope-protocol";
import { Editor } from "./Editor";
import { EnvelopeContextType } from "./EnvelopeContext";

/**
 * Factory of Editors to be created inside the envelope.
 */
export interface EditorFactory<T extends LanguageData> {
  /**
   * Returns true if the factory supports a language.
   * @param languageData The custom LanguageData
   */
  supports(languageData: T): boolean;

  /**
   * Returns an Editor based on a LanguageData.
   * Receives a messageBus to be used by the Editor to communicate with the outside of the envelope.
   */
  createEditor(languageData: T, envelopeContext: EnvelopeContextType): Promise<Editor>;
}