import { NavigationNode } from "./menu-item.model";

export const MENU: NavigationNode[] =
  [
    {
      "title": "Introduction"
    },
    {
      "title": "State",
      "children": [
        {
          "title": "@ngrx/store",
          "children": [
            {
              "title": "Why use Store?",
              "url": "/docs/guide-store-why"
            },
            {
              "title": "Getting Started",
              "url": "/docs/guide-store"
            },
            {
              "title": "Walkthrough",
              "url": "/docs/guide-store-walkthrough"
            },
            {
              "title": "Installation",
              "url": "/docs/guide-store-install"
            },
            {
              "title": "Architecture",
              "children": [
                {
                  "title": "Actions",
                  "url": "/docs/guide-store-actions"
                },
                {
                  "title": "Reducers",
                  "url": "/docs/guide-store-reducers"
                },
                {
                  "title": "Selectors",
                  "url": "/docs/guide-store-selectors"
                }
              ]
            },
            {
              "title": "Advanced",
              "children": [
                {
                  "title": "Meta-Reducers",
                  "url": "/docs/guide-store-metareducers"
                },
                {
                  "title": "Feature Creators",
                  "url": "/docs/guide-store-feature-creators"
                },
                {
                  "title": "Action Groups",
                  "url": "/docs/guide-store-action-groups"
                }
              ]
            },
            {
              "title": "Recipes",
              "children": [
                {
                  "title": "Injecting Reducers",
                  "url": "/docs/guide-store-recipes-injecting"
                },
                {
                  "title": "Downgrade for AngularJS",
                  "url": "/docs/guide-store-recipes-downgrade"
                }
              ]
            },
            {
              "title": "Configuration",
              "children": [
                {
                  "title": "Runtime checks",
                  "url": "/docs/guide-store-configuration-runtime-checks"
                }
              ]
            },
            {
              "title": "Testing",
              "url": "/docs/guide-store-testing"
            }
          ]
        },
        {
          "title": "@ngrx/effects",
          "children": [
            {
              "title": "Overview",
              "url": "/docs/guide-effects"
            },
            {
              "title": "Installation",
              "url": "/docs/guide-effects-install"
            },
            {
              "title": "Testing",
              "url": "/docs/guide-effects-testing"
            },
            {
              "title": "Lifecycle",
              "url": "/docs/guide-effects-lifecycle"
            },
            {
              "title": "Operators",
              "url": "/docs/guide-effects-operators"
            }
          ]
        },
        {
          "title": "@ngrx/router-store",
          "children": [
            {
              "title": "Overview",
              "url": "/docs/guide-router-store"
            },
            {
              "title": "Installation",
              "url": "/docs/guide-router-store-install"
            },
            {
              "title": "Actions",
              "url": "/docs/guide-router-store-actions"
            },
            {
              "title": "Selectors",
              "url": "/docs/guide-router-store-selectors"
            },
            {
              "title": "Configuration",
              "url": "/docs/guide-router-store-configuration"
            }
          ]
        },
        {
          "title": "@ngrx/entity",
          "children": [
            {
              "title": "Overview",
              "url": "/docs/guide-entity"
            },
            {
              "title": "Installation",
              "url": "/docs/guide-entity-install"
            },
            {
              "title": "Entity Interfaces",
              "url": "/docs/guide-entity-interfaces"
            },
            {
              "title": "Entity Adapter",
              "url": "/docs/guide-entity-adapter"
            },
            {
              "title": "Recipes",
              "children": [
                {
                  "title": "Additional State Properties",
                  "url": "/docs/guide-entity-recipes-additional-state-properties"
                },
                {
                  "title": "Entity Adapter with Feature Creator",
                  "url": "/docs/guide-entity-recipes-entity-adapter-with-feature-creator"
                }
              ]
            }
          ]
        },
        {
          "title": "@ngrx/component-store",
          "children": [
            {
              "title": "Overview",
              "url": "/docs/guide-component-store"
            },
            {
              "title": "Installation",
              "url": "/docs/guide-component-store-install"
            },
            {
              "title": "Architecture",
              "children": [
                {
                  "title": "Initialization",
                  "url": "/docs/guide-component-store-initialization"
                },
                {
                  "title": "Read",
                  "url": "/docs/guide-component-store-read"
                },
                {
                  "title": "Write",
                  "url": "/docs/guide-component-store-write"
                },
                {
                  "title": "Effects",
                  "url": "/docs/guide-component-store-effect"
                }
              ]
            },
            {
              "title": "Lifecycle",
              "url": "/docs/guide-component-store-lifecycle"
            },
            {
              "title": "ComponentStore vs Store",
              "url": "/docs/guide-component-store-comparison"
            },
            {
              "title": "Usage",
              "url": "/docs/guide-component-store-usage"
            }
          ]
        }
      ]
    },
    {
      "title": "Data",
      "children": [
        {
          "title": "@ngrx/data",
          "children": [
            {
              "title": "Overview",
              "url": "/docs/guide-data"
            },
            {
              "title": "Installation",
              "url": "/docs/guide-data-install"
            },
            {
              "title": "Architecture",
              "children": [
                {
                  "title": "Overview",
                  "url": "/docs/guide-data-architecture-overview"
                },
                {
                  "title": "Entity Metadata",
                  "url": "/docs/guide-data-entity-metadata"
                },
                {
                  "title": "Entity Actions",
                  "url": "/docs/guide-data-entity-actions"
                },
                {
                  "title": "Entity Collection",
                  "url": "/docs/guide-data-entity-collection"
                },
                {
                  "title": "Entity Collection Service",
                  "url": "/docs/guide-data-entity-collection-service"
                },
                {
                  "title": "Entity Dataservice",
                  "url": "/docs/guide-data-entity-dataservice"
                },
                {
                  "title": "Entity Effects",
                  "url": "/docs/guide-data-entity-effects"
                },
                {
                  "title": "Entity Reducer",
                  "url": "/docs/guide-data-entity-reducer"
                },
                {
                  "title": "Entity Services",
                  "url": "/docs/guide-data-entity-services"
                }
              ]
            },
            {
              "title": "Advanced",
              "children": [
                {
                  "title": "Save Multiple Entities",
                  "url": "/docs/guide-data-save-entities"
                },
                {
                  "title": "Entity Change Tracking",
                  "url": "/docs/guide-data-entity-change-tracker"
                },
                {
                  "title": "Extension Points",
                  "url": "/docs/guide-data-extension-points"
                }
              ]
            },
            {
              "title": "FAQ",
              "url": "/docs/guide-data-faq"
            },
            {
              "title": "Limitations",
              "url": "/docs/guide-data-limitations"
            }
          ]
        }
      ]
    },
    {
      "title": "View",
      "children": [
        {
          "title": "@ngrx/component",
          "children": [
            {
              "title": "Overview",
              "url": "/docs/guide-component"
            },
            {
              "title": "Installation",
              "url": "/docs/guide-component-install"
            },
            {
              "title": "Let Directive",
              "url": "/docs/guide-component-let"
            },
            {
              "title": "Push Pipe",
              "url": "/docs/guide-component-push"
            }
          ]
        }
      ]
    },
    {
      "title": "Developer Tools",
      "children": [
        {
          "title": "@ngrx/store-devtools",
          "children": [
            {
              "title": "Overview",
              "url": "/docs/guide-store-devtools"
            },
            {
              "title": "Installation",
              "url": "/docs/guide-store-devtools-install"
            },
            {
              "title": "Instrumentation",
              "url": "/docs/guide-store-devtools-config"
            },
            {
              "title": "Recipes",
              "children": [
                {
                  "title": "Exclude from Production",
                  "url": "/docs/guide-store-devtools-recipes-exclude"
                }
              ]
            }
          ]
        },
        {
          "title": "@ngrx/schematics",
          "children": [
            {
              "title": "Overview",
              "url": "/docs/guide-schematics"
            },
            {
              "title": "Installation",
              "url": "/docs/guide-schematics-install"
            },
            {
              "title": "Schematics",
              "children": [
                {
                  "title": "Store",
                  "url": "/docs/guide-schematics-store"
                },
                {
                  "title": "Action",
                  "url": "/docs/guide-schematics-action"
                },
                {
                  "title": "Reducer",
                  "url": "/docs/guide-schematics-reducer"
                },
                {
                  "title": "Selector",
                  "url": "/docs/guide-schematics-selector"
                },
                {
                  "title": "Container",
                  "url": "/docs/guide-schematics-container"
                },
                {
                  "title": "Effect",
                  "url": "/docs/guide-schematics-effect"
                },
                {
                  "title": "Entity",
                  "url": "/docs/guide-schematics-entity"
                },
                {
                  "title": "Feature",
                  "url": "/docs/guide-schematics-feature"
                }
              ]
            }
          ]
        },
        {
          "title": "@ngrx/eslint-plugin",
          "children": [
            {
              "title": "Overview",
              "url": "/docs/guide-eslint-plugin"
            },
            {
              "title": "Installation",
              "url": "/docs/guide-eslint-plugin-install"
            }
          ]
        }
      ]
    },
    {
      "title": "Recipes",
      "children": [
        {
          "title": "Nightly Builds",
          "url": "/docs/guide-nightlies"
        }
      ]
    },
    {
      "title": "Migrations",
      "children": [
        {
          "title": "V16",
          "url": "/docs/guide-migration-v16"
        },
        {
          "title": "V15",
          "url": "/docs/guide-migration-v15"
        },
        {
          "title": "V14",
          "url": "/docs/guide-migration-v14"
        },
        {
          "title": "V13",
          "url": "/docs/guide-migration-v13"
        },
        {
          "title": "V12",
          "url": "/docs/guide-migration-v12"
        },
        {
          "title": "V11",
          "url": "/docs/guide-migration-v11"
        },
        {
          "title": "V10",
          "url": "/docs/guide-migration-v10"
        },
        {
          "title": "V9",
          "url": "/docs/guide-migration-v9"
        },
        {
          "title": "V8",
          "url": "/docs/guide-migration-v8"
        },
        {
          "title": "V7",
          "url": "/docs/guide-migration-v7"
        },
        {
          "title": "V4",
          "url": "/docs/guide-migration-v4"
        }
      ]
    },
    {
      "url": "/docs/api",
      "title": "API",
      "tooltip": "API Reference"
    },
    {
      "url": "/docs/contributing",
      "title": "Contributing",
      "tooltip": "Contributing"
    },
    {
      "url": "/docs/enterprise-support",
      "title": "Enterprise Support",
      "tooltip": "Enterprise Support"
    }
  ]
