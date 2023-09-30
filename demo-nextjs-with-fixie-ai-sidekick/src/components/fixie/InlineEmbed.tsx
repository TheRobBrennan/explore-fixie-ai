"use client"
import { FIXIE_AGENT_ID } from '.'
import { InlineFixieEmbed } from 'fixie/web';

export interface InlineEmbedProps {
  width: number
  height: number
}

export function InlineEmbed({ width, height }: InlineEmbedProps) {
  return (<InlineFixieEmbed agentId={FIXIE_AGENT_ID} width={width} height={height} />)
}
