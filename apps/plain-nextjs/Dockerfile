ARG NODE=node:16.15.0-alpine

FROM ${NODE} as deps
RUN yarn set version 1.22.19
WORKDIR /app
COPY apps/plain-nextjs/ ./
RUN yarn install

FROM ${NODE} as builder
ENV NODE_ENV production 
RUN yarn set version 1.22.19
WORKDIR /app
COPY --from=deps /app/ ./
RUN yarn build

FROM ${NODE} as production
WORKDIR /app
ENV NODE_ENV production 


RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/next.config.js ./
# COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
# COPY --from=builder /app/.env ./

# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3005

ENV PORT 3005

CMD node --max-old-space-size=360 server.js
