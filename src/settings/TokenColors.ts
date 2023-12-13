import { base, comments, punctuation, strings } from "../token-scopes/general";
import { attributes, tags, text } from "../token-scopes/html";
import {
  constants,
  functions,
  keywords,
  operators,
  properties,
  storage,
  types,
  variables,
} from "../token-scopes/prog";

export const tokenColors = [
  ...attributes,
  ...base,
  ...comments,
  ...constants,
  ...functions,
  ...keywords,
  ...operators,
  ...properties,
  ...punctuation,
  ...storage,
  ...strings,
  ...tags,
  ...text,
  ...types,
  ...variables,
];
