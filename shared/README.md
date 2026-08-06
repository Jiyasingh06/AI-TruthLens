# Shared

Cross-service shared contracts used by frontend and backend layers.

## Structure
- `types/` — shared TypeScript type definitions
- `constants/` — shared enums and constant values
- `schemas/` — shared validation schema definitions

Prefer keeping transport contracts here to avoid drift between clients and servers.
