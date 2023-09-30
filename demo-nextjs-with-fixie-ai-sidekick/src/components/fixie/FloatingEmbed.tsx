"use client"
import { FIXIE_AGENT_ID } from '.'
import { FloatingFixieEmbed } from 'fixie/web';

export function FloatingEmbed() {
  return (<FloatingFixieEmbed agentId={FIXIE_AGENT_ID} />)
}
